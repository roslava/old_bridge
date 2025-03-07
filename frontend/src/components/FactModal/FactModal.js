'use client';

import { Dialog } from '@headlessui/react';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image';

// Функция для преобразования Rich Text в HTML
const richTextToHtml = (richText) => {
    if (!richText || !Array.isArray(richText)) return '';

    return richText
        .map((paragraph) => {
            if (paragraph.type === 'paragraph' && paragraph.children) {
                const childrenHtml = paragraph.children
                    .map((child) => {
                        let text = child.text || '';
                        if (child.bold) text = `<strong>${text}</strong>`;
                        if (child.italic) text = `<em>${text}</em>`;
                        if (child.underline) text = `<u>${text}</u>`;
                        return text;
                    })
                    .join('');
                return `<p>${childrenHtml}</p>`;
            }
            return '';
        })
        .join(''); // Соединяем абзацы
};

export default function FactModal({ isOpen, onClose, selectedFact }) {
    console.log('selectedFact01', selectedFact);
    console.log('!NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL); // Проверка значения переменной

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[61]" aria-hidden="true" />
            <Dialog.Panel className="bg-white rounded-lg p-12 max-w-2xl w-full max-h-full overflow-y-auto z-[62] scrollbar-thin">
                {/* Отображение изображений из media */}
                {selectedFact?.media && selectedFact.media.length > 0 && (
                    <div className="mb-6">

                                <div className="mb-4">
                                    <Image
                                        src={selectedFact.media[0].url}
                                        alt={selectedFact.media[0].alternativeText || selectedFact.media[0].caption || 'Media'}
                                        width={selectedFact.media[0].width || 800}
                                        height={selectedFact.media[0].height || 600}
                                        className="rounded-lg"
                                    />
                                    {selectedFact.media[0].caption && (
                                        <p className="mt-2 text-sm text-gray-600">{selectedFact.media[0].caption}</p>
                                    )}
                                </div>

                    </div>
                )}

                <Dialog.Title className="font-family_heading text-h3 uppercase text-thm-foreground">
                    {selectedFact?.title}
                </Dialog.Title>
                <div className="mt-4 text-thm-foreground">
                    <p className="font-medium">{selectedFact?.lead}</p>
                    {selectedFact?.description && <p className="mt-4">{selectedFact.description}</p>}
                    {/* Отображение поля full_text с помощью react-html-parser */}
                    {selectedFact?.full_text && (
                        <div className="mt-4 mb-6 rich-text-content">
                            {ReactHtmlParser(richTextToHtml(selectedFact.full_text))}
                        </div>
                    )}
                </div>
                {selectedFact?.media
                    .filter((_, index) => index !== 0) // Исключаем элемент с индексом 0
                    .map((mediaItem) => {
                        // Проверяем, что mediaItem.url существует и является строкой
                        if (!mediaItem.url || typeof mediaItem.url !== 'string') {
                            console.error('Invalid media URL:', mediaItem.url);
                            return null;
                        }
                        const imageUrl = mediaItem.url;
                        return (
                            <div key={imageUrl} className="mb-4">
                                <Image
                                    src={mediaItem.url}
                                    alt={mediaItem.alternativeText || mediaItem.caption || 'Media'}
                                    width={mediaItem.width || 800}
                                    height={mediaItem.height || 600}
                                    className="rounded-lg"
                                />
                                {mediaItem.caption && (
                                    <p className="mt-2 text-sm text-gray-600">{mediaItem.caption}</p>
                                )}
                            </div>
                        );
                    })}








                <button
                    onClick={onClose}
                    className="mt-4 bg-primary-orange-85 text-white px-4 py-2 rounded"
                >
                    Закрыть
                </button>
            </Dialog.Panel>
        </Dialog>
    );
}
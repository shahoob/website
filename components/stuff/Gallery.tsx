import React from 'react';
import { Figure } from 'react-bootstrap';

export interface Image {
    url: string;
    description?: string;
    date?: string;
    size: {
        width: number;
        height: number;
    };
}

export interface GalleryProps {
    images: Image[]
}

export default function Gallery({ images }: GalleryProps) {
    return (
        <>
            {images.map(image => (
                <Figure>
                    <Figure.Image
                        src={image.url}
                        width={image.size.width}
                        height={image.size.height}
                    />
                    <Figure.Caption>
                        {image.description ?? null}
                        { image.description ? <br/> : null }
                        Uploaded at {new Date(image.date).toLocaleDateString()}
                    </Figure.Caption>
                </Figure>
            ))}
        </>
    );
}

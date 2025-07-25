import { useState } from "react";
import ReactDOM from "react-dom";

export default function CardModal({ img, title, subtitle, text }) {
    const [isOpen, setIsOpen] = useState(false);

    const showImg = img ? "block" : "none";
    const showText = img ? "none" : "block";

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const content = (
    <div className="bg-gray-900 rounded-xl text-white h-auto overflow-hidden">
        <img
        src={img || ""}
        alt="Card Image"
        className="h-auto rounded w-full object-cover"
        style={{ display: showImg }}
        />
        <div style={{ display: showText }}>
        <h1 className="m-4 text-5xl font-bold">{title}</h1>
        <p className="m-4 text-2xl text-gray-500">{subtitle}</p>
        <p className="m-4">{text}</p>
        </div>
    </div>
    );

    return (
    <>
        <div onClick={openModal} className="cursor-pointer">
        {content}
        </div>

        {isOpen &&
        ReactDOM.createPortal(
            <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            >
                <div
                className="max-w-screen-lg w-full bg-gray-900 rounded-xl overflow-hidden max-h-full"
                onClick={(e) => e.stopPropagation()}
                >
                {content}
                </div>
            </div>,
            document.body
        )}
    </>
    );
}

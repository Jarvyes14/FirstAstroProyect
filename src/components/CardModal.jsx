import { useState } from "react";
import ReactDOM from "react-dom";

export default function CardModal({ img, title, subtitle, text, zoom}) {
    const [isOpen, setIsOpen] = useState(false);

    const zoomEnabled = zoom !== "false";

    const showImg = img ? "block" : "none";
    const showText = img ? "none" : "block";

    const openModal = () => {
        if(zoomEnabled) setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

    const content = (
    <div className="bg-gray-900 rounded-xl text-white h-auto overflow-hidden">
        <img
        src={img || null}
        alt="Card Image"
        className="h-auto rounded w-full object-cover"
        style={{ display: showImg }}
        />
        <div style={{ display: showText }}>
        <h1 className="m-4 xs:m-2 xs:text-3xl sm:text-6xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold">{title}</h1>
        <p className="m-4 xs:m-2 xs:text-sm sm:text-3xl md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-500">{subtitle}</p>
        <p className="m-4 xs:m-2 xs:text-xs sm:text-xl md:text-base xl:text-lg 2xl:text-xl">{text}</p>
        </div>
    </div>
    );

    return (
    <>
        <div onClick={zoomEnabled ? openModal : undefined} className={zoomEnabled ? "cursor-pointer" : ""}>
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

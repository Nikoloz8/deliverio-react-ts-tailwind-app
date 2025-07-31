import 'leaflet/dist/leaflet.css';

export default function GPS() {
    return (
        <div
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191793162046!2d-122.41941518468137!3d37.77492927975914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814cbb6a12e9%3A0x4f44e8c2d0f67b11!2sTbilisio!5e0!3m2!1sen!2sus!4v1690847548498!5m2!1sen!2sus"
                className="w-[807px] h-[439px] rounded-[6px] border-[4px] border-solid border-[#777777]"
                loading="lazy"
            ></iframe>

        </div>
    )
}

export default function AddIcon({ width, height, stroke, className }: { width: number, height: number, stroke: string, className?: string }) {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Edit / Add_Plus">
                <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>)
}
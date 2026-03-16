export default function Chip({ text }: { text: string }) {
    return (
        <p className="w-max p-2 rounded text-white font-bold bg-slate-700">
            {text}
        </p>
    )
}
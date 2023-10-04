import { InputProps } from "../../types/Input";

export function InputDefault(props: InputProps) {
    return (
        <input
            {...props}
            className="bg-zinc-900 py-3 px-4 rounded text-sm outline-none placeholder:text-zinc-500"
        />
    )
}
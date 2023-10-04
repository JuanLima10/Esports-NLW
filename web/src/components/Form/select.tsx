import * as Select from '@radix-ui/react-select';
import { SelectProps } from '../../types/Select';
import { CaretDown } from 'phosphor-react';


export function SelectDefault(props: SelectProps) {
    return (
        <Select.Root name={props.name}>
            <Select.Trigger name={props.name} id={props.name} className="flex items-center justify-between rounded px-4 h-11 gap-1 bg-zinc-900 text-white">
                <Select.Value placeholder={`Selecione o ${props.name}`} />
                <CaretDown />
            </Select.Trigger>

            <Select.Portal>
                <Select.Content className="overflow-hidden bg-zinc-900 border border-zinc-500 rounded-md shadow-lg">
                    <Select.Viewport className="p-1">
                        <Select.Group>
                            <Select.SelectLabel className="text-zinc-500 pl-1 pt-1 mb-1">Selecione o game</Select.SelectLabel>
                            { props.children }
                        </Select.Group>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}
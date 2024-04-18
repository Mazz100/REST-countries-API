import * as Select from '@radix-ui/react-select'

function FilterRegion() {


    return (
            <form>
                <Select.Root>
                    <Select.Trigger className='bg-white shadow-md p-3 mx-4 rounded-md inline-flex items-center'>
                        <Select.Value className='font-semibold'
                            placeholder="Filter by Region"
                            aria-label='Filter by Region' />

                        <svg className="w-4 ml-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className='bg-white shadow-md rounded-lg overflow-hidden'>
                            <Select.ScrollUpButton />
                            <Select.Viewport className='hover:cursor-default p-3 '>

                                <Select.Item className='flex items-center justify-between data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
                                    value='Africa'>

                                    <Select.ItemText>
                                        Africa
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item className='flex items-center justify-between data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
                                    value='America'>

                                    <Select.ItemText>
                                        America
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item className='flex items-center justify-between data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
                                    value='Asia'>

                                    <Select.ItemText>
                                        Asia
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item className='flex items-center justify-between data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
                                    value='Europe'>

                                    <Select.ItemText>
                                        Europe
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item className='flex items-center justify-between data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none'
                                    value='Oceania'>

                                    <Select.ItemText>
                                        Oceania
                                    </Select.ItemText>

                                    <Select.ItemIndicator>
                                        <svg className='' width="15" height="15"
                                            viewBox="0 0 15 15"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </Select.ItemIndicator>
                                </Select.Item>

                            </Select.Viewport>
                            <Select.ScrollDownButton />
                            <Select.Arrow />
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </form>
    );
}

export default FilterRegion
import * as Select from '@radix-ui/react-select'

function FilterRegion() {
    return (
        <div>
            <form>
                <Select.Root>
                    <Select.Trigger className='bg-white shadow-md p-4 ml-6 rounded-md inline-flex items-center'>
                        <Select.Value placeholder="Filter by Region" className='font-semibold' />

                        <svg className="w-4 ml-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>

                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className='bg-white shadow-md p-4 rounded-lg mb-2'>
                            <Select.ScrollUpButton />
                            <Select.Viewport className='hover:cursor-default'>

                                <Select.Item className='flex items-center  hover:bg-gray-100 focus-within:outline-none'
                                    value='Africa'>

                                    <Select.ItemIndicator>
                                        <svg className="w-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </Select.ItemIndicator>

                                    <Select.ItemText>
                                        Africa
                                    </Select.ItemText>
                                </Select.Item>

                                <Select.Item className='flex items-center  hover:bg-gray-100 focus-within:outline-none'
                                    value='America'>
                                    <Select.ItemIndicator>
                                        <svg className="w-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </Select.ItemIndicator>

                                    <Select.ItemText>
                                        America
                                    </Select.ItemText>
                                </Select.Item>

                                <Select.Item className='flex items-center  hover:bg-gray-100 focus-within:outline-none'
                                    value='Asia'>
                                    <Select.ItemIndicator>
                                        <svg className="w-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </Select.ItemIndicator>

                                    <Select.ItemText>
                                        Asia
                                    </Select.ItemText>
                                </Select.Item>

                                <Select.Item className='flex items-center  hover:bg-gray-100 focus-within:outline-none'
                                    value='Europe'>
                                    <Select.ItemIndicator>
                                        <svg className="w-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </Select.ItemIndicator>

                                    <Select.ItemText>
                                        Europe
                                    </Select.ItemText>
                                </Select.Item>

                                <Select.Item className='flex items-center  hover:bg-gray-100 focus-within:outline-none'
                                    value='Oceania'>
                                    <Select.ItemIndicator>
                                        <svg className="w-4 mr-2"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </Select.ItemIndicator>

                                    <Select.ItemText>
                                        Oceania
                                    </Select.ItemText>
                                </Select.Item>

                            </Select.Viewport>
                            <Select.ScrollDownButton />
                            <Select.Arrow />
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </form>

        </div>
    );
}

export default FilterRegion
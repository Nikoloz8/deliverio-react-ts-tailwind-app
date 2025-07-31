type TGetStartedCard = {
    text1: string
    text2: string
    text3: string
    imgSrc: string
    photoLocation?: string
    ml?: string
    bg?: string
    mw?: string
}

type TForm = {
    register: UseFormRegister<FieldValues>
    watch: UseFormWatch<FieldValues>
    handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>
    reset: UseFormReset<FieldValues>
    errors: FieldErrors<FieldValues>
    clearErrors: UseFormClearErrors<FieldValues>
}

type TIndex = Partial<{
    watch: UseFormWatch<FieldValues>
    role: string
    reset: UseFormReset<FieldValues>
    showDelete: boolean
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
    setOrders: React.Dispatch<React.SetStateAction<any[]>>
    order: any
    orders: any[]
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    setShowChangeStatus: React.Dispatch<React.SetStateAction<boolean>>
    setShowStatus: React.Dispatch<React.SetStateAction<number>>
    setFileName: React.Dispatch<React.SetStateAction<string>>
    setNotFoundError: React.Dispatch<React.SetStateAction<number>>
}>

type TPanelsLayoutOutletContext = {
    orders: any[]
    setOrders: React.Dispatch<React.SetStateAction<any[]>>
    storesArr: any[]
    filterStore: any[]
    setFilterStore: React.Dispatch<React.SetStateAction<any[]>>
    sortBy: string
    setSortBy: React.Dispatch<React.SetStateAction<string>>
    pageOrders: any[]
    filteredOrders: any[]
    setCountPages: React.Dispatch<React.SetStateAction<number>>
    totalPages: number
    setShowSorts: React.Dispatch<React.SetStateAction<boolean>>
    showSorts: boolean
    showForm: boolean
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
    showDelete: boolean
    setShowDelete: React.Dispatch<React.SetStateAction<boolean>>
    showChangeStatus: boolean
    setShowChangeStatus: React.Dispatch<React.SetStateAction<boolean>>
    showCouriers: number
    setShowCouriers: React.Dispatch<React.SetStateAction<number>>
    showStatus: number
    setShowStatus: React.Dispatch<React.SetStateAction<number>>

} 
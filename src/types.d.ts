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
}
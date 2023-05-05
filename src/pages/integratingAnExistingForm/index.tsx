import React from 'react'
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'

interface IFormValues {
  'First Name': string
  Age: number
}

type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  required: boolean
}

// 既存のInputコンポーネントのサンプル
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

// React.forwardRef を使って ref を渡すことも可能
// eslint-disable-next-line react/display-name
const Select = React.forwardRef<
  // 関数コンポーネントをforwardRefでwrapする 型は<Refの型, propsの型>
  HTMLSelectElement, // Refの型
  { label: string } & ReturnType<UseFormRegister<IFormValues>> // propsの型
>(
  (
    { onChange, onBlur, name, label },
    ref // 第1引数はprops, 第2引数はrefが入る
  ) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
)

const IntegratingAnExistingForm = () => {
  const { register, handleSubmit } = useForm<IFormValues>()
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }
  return (
    <div>
      <h2>Integrating An Existing Form</h2>
      <p>
        既存のフォームを統合するにはコンポーネントのrefを登録し、入力に関連するpropを割り当てます。
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input label="First Name" register={register} required />
        </div>
        <div>
          <Select label="Age" {...register('Age')} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default IntegratingAnExistingForm

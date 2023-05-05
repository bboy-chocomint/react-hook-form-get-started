import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

const ApplyValidation = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div>
      <h2>ApplyValidation</h2>
      <p>RHF は既存のHTML標準のフォームバリデーションが利用できる。</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* 必須, 最長20文字 */}
          <label>First Name: </label>
          <input
            {...register('firstName', { required: true, maxLength: 20 })}
          />
        </div>

        <div>
          {/* A-Z a-z のパターンにマッチする文字列のみ利用可能 */}
          <label>Last Name: </label>
          <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        </div>

        <div>
          {/* 18 ~ 99 の文字数制限 */}
          <label>Age: </label>
          <input type="number" {...register('age', { min: 18, max: 99 })} />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default ApplyValidation

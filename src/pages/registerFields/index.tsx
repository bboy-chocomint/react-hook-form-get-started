import { SubmitHandler, useForm } from 'react-hook-form'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: String
  gender: GenderEnum
}

const RegisterFields = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div>
      <h2>Register Fields</h2>
      <p>
        RHF
        の重要なコンセプトの一つは、フックにコンポーネントを登録することです。
        これにより、フォームの検証と送信の療法でその値を利用できるようになります。
        (各項目には、登録の際のキーとなる名前が必要です)
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register('firstName')} />
        </div>

        <div>
          <label>Gender Selection</label>
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default RegisterFields

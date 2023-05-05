import { SubmitHandler, useForm } from 'react-hook-form'

interface IFormInputs {
  firstName: string
  lastName: string
}

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

const HandleErrors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>()
  return (
    <div>
      <h2>Handle Errors</h2>
      <p>errorsオブジェクトはフォームのエラーを表示するために利用する。</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>First name is required</span>}
        </div>
        <div>
          <label>Last Name: </label>
          <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>Last name is required</span>}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default HandleErrors

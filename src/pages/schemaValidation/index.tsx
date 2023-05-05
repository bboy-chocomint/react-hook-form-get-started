import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

type FormData = yup.InferType<typeof schema>

const SchemaValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
    <div>
      <h2>Schema Validation</h2>
      <p>
        YupやZodなどのスキーマベースのフォーム検証をサポートしている。
        オプションの設定としてuseFormにスキーマを渡すことができ、
        入力データを検証してエラーまたは有効な結果を返す。
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('firstName')} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <input {...register('age')} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}

export default SchemaValidation

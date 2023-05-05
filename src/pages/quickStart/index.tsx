import { SubmitHandler, useForm } from 'react-hook-form'

// Form で利用する値の型を指定
type Inputs = {
  example: string
  exampleRequired: string
}

// QuickStart: 基本的な使い方のサンプル
const QuickStart = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>() // useForm の型として Inputs をジェネリックで渡す

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  // register で登録した値を watch("register name") で監視できる
  console.log(watch('example'))

  return (
    <div>
      <h2>Quick Start</h2>

      {/* handleSubmit は onSubmit を実行する前に入力の検証ができる */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* register 関数で RHF に入力を登録する  */}
          <input {...register('example')} />
        </div>

        <div>
          {/* register 関数の第2引数で required などの標準的なHTML検証を挟める */}
          <input {...register('exampleRequired', { required: true })} />
          {/* errors はバリデーションに失敗すると値が返却される  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default QuickStart

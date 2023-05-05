import { Checkbox } from '@material-ui/core'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

interface IFormInputs {
  TextField: string
  MyCheckbox: boolean
}

const IntegratingControlledInputs = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  })

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <div>
      <h2>Integrating Controlled Inputs</h2>
      <p>
        Controllerで外部制御型コンポーネントをラップし、カスタムレジスタを利用できる。
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>MUI - Checkbox </span>
        <Controller
          name="MyCheckbox"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />

        <input type="submit" />
      </form>
    </div>
  )
}

export default IntegratingControlledInputs

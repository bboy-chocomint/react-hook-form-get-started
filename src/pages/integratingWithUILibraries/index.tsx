import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Input from '@material-ui/core/Input'
import Select from 'react-select'

interface IFormInput {
  firstName: string
  lastName: string
  iceCreamType: { label: string; value: string }
}

const IntegratingWithUILibraries = () => {
  const { control, handleSubmit } = useForm({
    // formの初期値を設定
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: { label: '', value: '' },
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <div>
      <h2>Integrating With UI Libraries</h2>
      <p>
        RHFは非制御のコンポーネントやネイティブのinput入力を扱えるが、
        React-selectやMUIなどの外部制御のコンポーネントを扱う場合には
        ControllerコンポーネントでWrapする必要がある。
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="firstName" // 登録のためのユニークネーム
            control={control} // 制御オブジェクトは useForm を呼び出すことで得られる。FormProviderを使用する場合はオプション。
            render={({ field }) => <Input {...field} />} // render内ではregisterする必要はない。
          />
        </div>
        <div>
          <Controller
            name="iceCreamType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: 'chocolate', label: 'chocolate' },
                  { value: 'strawberry', label: 'strawberry' },
                  { value: 'vanilla', label: 'vanilla' },
                ]}
              />
            )}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default IntegratingWithUILibraries

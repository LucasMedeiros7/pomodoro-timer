// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { FormContainer, MinutesAmountInput, TaskInput } from '../../styles'

// const newCycleFormValidationSchema = z.object({
//   task: z.string().min(1, 'Informe a tarefa'),
//   minutesAmount: z
//     .number()
//     .min(5, 'O ciclo deve ser de no minímo 5 minutos.')
//     .max(60, 'O ciclo deve ser de no máximo 60 minutos.'),
// })

// type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

// export function NewCycleForm() {
//   const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
//     resolver: zodResolver(newCycleFormValidationSchema),
//     defaultValues: {
//       task: '',
//       minutesAmount: 0,
//     },
//   })

//   return (
//     <FormContainer>
//       <label htmlFor="task">Vou trabalhar em</label>
//       <TaskInput
//         id="task"
//         list="task-suggestions"
//         placeholder="Dê um nome para o seu projeto"
//         disabled={!!activeCycle}
//         {...register('task')}
//       />

//       <datalist id="task-suggestions">
//         <option value="Projeto 1"></option>
//         <option value="Projeto 2"></option>
//         <option value="Projeto 3"></option>
//       </datalist>

//       <label htmlFor="minutesAmount">durante</label>
//       <MinutesAmountInput
//         type="number"
//         id="minutesAmount"
//         placeholder="00"
//         step={5}
//         min={5}
//         max={60}
//         disabled={!!activeCycle}
//         {...register('minutesAmount', { valueAsNumber: true })}
//       />

//       <span>minutos.</span>
//     </FormContainer>
//   )
// }

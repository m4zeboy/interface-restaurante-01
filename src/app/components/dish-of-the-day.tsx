import { Dish, getDishOfTheDay } from '@/services/get-dish-of-the-day'
import { CreateDishButton } from './create-dish-button'

export default async function DishOfTheDay() {
  const DishInfo = ({ dish }: { dish: Dish }) => {
    return (
      <>
        <p className="text-2xl font-bold mt-2">
          <span>{dish.main_dish}</span>
          <span> ou </span>
          <span>{dish.vegan_main_dish}</span>
        </p>
        <p className="text-slate-400 block mt-2">
          <span>{dish.follow_up}</span> | <span>{dish.dessert}</span>
        </p>
      </>
    )
  }

  const DishNotFound = () => {
    return (
      <p className="text-slate-400 mt-2">Ainda não temos o prato de hoje</p>
    )
  }

  const DishTitle = () => {
    const today = new Date().toLocaleDateString('pt-br')
    return (
      <h2 className="uppercase text-xs font-semibold">
        Cardápio do dia <span>{today}</span>
      </h2>
    )
  }

  const ErrorWhileFetchingDish = () => {
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <DishTitle></DishTitle>
          <p>Houve um erro ao carregar o prato do dia.</p>
        </section>
      </div>
    )
  }
  try {
    const { data } = await getDishOfTheDay()
    const { dish } = data
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <DishTitle></DishTitle>
          {dish !== null ? (
            <DishInfo dish={dish}></DishInfo>
          ) : (
            <DishNotFound></DishNotFound>
          )}
          <CreateDishButton></CreateDishButton>
        </section>
      </div>
    )
  } catch (err) {
    return <ErrorWhileFetchingDish></ErrorWhileFetchingDish>
  }
}

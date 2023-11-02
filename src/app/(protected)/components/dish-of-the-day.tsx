import { getDishOfTheDay } from '@/services/get-dish-of-the-day'

export default async function DishOfTheDay() {
  const today = new Date().toLocaleDateString()
  try {
    const { data } = await getDishOfTheDay()
    const { dish } = data
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <h2 className="uppercase text-xs font-semibold">
            Cardápio do dia <span>{today}</span>
          </h2>
          {dish !== null ? (
            <>
              <p className="text-2xl font-bold mt-2">
                <span>{dish?.main_dish}</span>
                <span>{dish?.vegan_main_dish}</span>
              </p>
              <p className="text-slate-400 block mt-2">
                <span>{dish?.follow_up}</span> | <span>{dish?.dessert}</span>
              </p>
            </>
          ) : (
            <p className="text-slate-400 mt-2">
              Ainda não temos o prato de hoje
            </p>
          )}
        </section>
      </div>
    )
  } catch (err) {
    return (
      <div className="pt-1 px-5 pb-4">
        <section className="p-4 bg-white rounded-md">
          <h2 className="uppercase text-xs font-semibold">
            Cardápio do dia <span>{today}</span>
          </h2>
          <p>Houve um erro ao carregar o prato do dia.</p>
        </section>
      </div>
    )
  }
}

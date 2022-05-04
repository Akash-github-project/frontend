import CashbackItem from "../../../subServices/specialJsons/cashbackItem"

const list = [
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
  {
    icon: "fa-solid fa-hand-holding-dollar",
    name: "some name",
    date: "22/11/2",
    sNo: "737",
    value: "232",
  },
]

const CashbackList = () => {
  return (
    <div className="grid  lg:grid-cols-2 gap-2 max-h-[400px] overflow-y-auto">
      {list.map((each) => (
        <CashbackItem {...each} />
      ))}
    </div>
  )
}

export default CashbackList

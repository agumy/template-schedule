export const DayCalendar = () => {
  return (
    <div className="h-full flex flex-col px-3">
      <div className="h-1/6"></div>
      <div className="flex flex-col h-5/6 border-t-2">
        <div className="overflow-auto">
          {[...Array(23).keys()].map((i) => (
            <div
              key={i}
              className="flex items-center border-t-2 first:border-t-0 h-16"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

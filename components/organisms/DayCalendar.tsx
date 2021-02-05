export const DayCalendar = () => {
  return (
    <div className="h-full flex flex-col px-3">
      <div className="h-1/6"></div>
      <div className="flex flex-col h-5/6 border-t-2">
        <div className="flex flex-col w-full overflow-auto">
          {[...Array(23).keys()].map((i) => (
            <div
              key={i}
              className="flex items-center border-t-2 first:border-t-0 h-16"
            >
              <div
                style={{
                  flex: '0 0 4rem',
                }}
                className="flex items-center justify-center pl w-16 border-r-2 h-full"
              >
                {i + 1}
              </div>
              <div className="flex items-center flex-auto h-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

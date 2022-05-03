export function formatDate(format, dateInString) {
  let givenDate = new Date(dateInString)
  let month = ""
  let year = givenDate.getFullYear().toString()
  let day = ""
  let retruningResult = format.replace(
    "yyyy",
    givenDate.getFullYear().toString()
  )

  //month parsed month get counted from 0 to 11
  if (givenDate.getMonth().toString().length === 1) {
    //fix for that behavior
    month = "0" + (givenDate.getMonth() + 1).toString()
  } else {
    month = (givenDate.getMonth() + 1).toString()
  }

  //day
  if (givenDate.getDate().toString().length === 1) {
    day = "0" + givenDate.getDate().toString()
    console.log(day)
  } else {
    day = givenDate.getDate().toString()
  }

  retruningResult = format.replace("mm", month)
  retruningResult = retruningResult.replace("dd", day)
  retruningResult = retruningResult.replace("yyyy", year)

  return retruningResult
}

// formatDate("yyyy-mm-dd", "2022-12-03")
// formatDate("dd-mm-yyyy", "2022-12-03")
// formatDate("yyyymmdd", "2022-12-03")
// formatDate("dd/mm/yyyy", "2022-12-02")
// formatDate("ddmmyyyy", "2022-12-03")

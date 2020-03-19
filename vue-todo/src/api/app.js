const getusername = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const atr = null
      if (!atr) {
        resolve({ code: 200, res: { name: 'newname' } })
      }
    }, 100)
  })
}
export default getusername

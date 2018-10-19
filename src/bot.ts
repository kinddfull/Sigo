import { TYPE } from './constants/matchTypes'

export const sendCafeteria = cafeteria => {
  try {
    const { type, data } = cafeteria
    console.log('send cafeteria')
    console.log('type : ', type)
    console.log('data : ', data ? '\n' + data : 'no cafeteria')
    if (type === TYPE.TODAY)
      return data ? `오늘 급식\n\n${data}` : '오늘은 급식을 먹는 날이 아닙니다'
    if (type === TYPE.TOMORROW)
      return data ? `내일 급식\n\n${data}` : '내일은 급식을 먹는 날이 아닙니다'
    if (type === TYPE.TARGET) return data
    if (type === TYPE.DAYKO) return data
    if (type === TYPE.THIS) return `이번 주 급식입니다\n\n${data}`
    if (type === TYPE.NEXT) return `다음 주 급식입니다\n\n${data}`
    if (type === TYPE.ERROR) return `올바른 날짜를 입력해주세요`
    else {
      return 'aa'
    }
  } catch (e) {
    return 'aa'
  }
}

export const sendSchedule = schedule => {
  try {
    const { type, data } = schedule
    console.log('send schedule')
    console.log('type : ', type)
    console.log('data : ', data ? '\n' + data : 'no schedule')
    if (type === TYPE.THIS) return `이빈 달 일정입니다\n\n${data}`
    if (type === TYPE.NEXT) return `다음 달 일정입니다\n\n${data}`
    if (type === TYPE.TARGET) return data
    if (type === TYPE.ALL) return `이번 년도 전체 일정입니다\n${data}`
    if (type === TYPE.ERROR) return `올바른 날짜를 입력해주세요`
  } catch {
    return 'aa'
  }
}

export const sendOverlap = options => `${options.value.join('? ')}?`
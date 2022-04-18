
export const formatDate = (date, format) => {
    let format_date = ''
    const date_ = new Date(date)
    const Y = date_.getFullYear()
    const M = date_.getMonth() + 1
    const D = date_.getDate()
    const h = date_.getHours()
    const m = date_.getMinutes()
    const s = date_.getSeconds()
    const zero = (num) => num > 9 ? num : '0' + num

    switch (format) {
        case 'Y-M-D':
            format_date = Y + '-' + M + '-' + D
            break
        case 'YYYY-MM-DD':
            format_date = Y + '-' + zero(M) + '-' + zero(D)
            break
        case 'Y-M-D h:m':
            format_date = Y + '-' + M + '-' + D + ' ' + h + ':' + m
            break
        case 'YYYY-MM-DD hh:mm':
            format_date = Y + '-' + zero(M) + '-' + zero(D) + ' ' + zero(h) + ':' + zero(m)
            break
        case 'Y-M-D h:m:s':
            format_date = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
            break
        case 'YYYY-MM-DD hh:mm:ss':
            format_date = Y + '-' + zero(M) + '-' + zero(D) + ' ' + zero(h) + ':' + zero(m) + ':' + zero(s)
            break

        case 'Y/M/D':
            format_date = Y + '/' + M + '/' + D
            break
        case 'YYYY/MM/DD':
            format_date = Y + '/' + zero(M) + '/' + zero(D)
            break
        case 'Y/M/D h:m':
            format_date = Y + '/' + M + '/' + D + ' ' + h + ':' + m
            break
        case 'YYYY/MM/DD hh:mm':
            format_date = Y + '/' + zero(M) + '/' + zero(D) + ' ' + zero(h) + ':' + zero(m)
            break
        case 'Y/M/D h:m:s':
            format_date = Y + '/' + M + '/' + D + ' ' + h + ':' + m + ':' + s
            break
        case 'YYYY/MM/DD hh:mm:ss':
            format_date = Y + '/' + zero(M) + '/' + zero(D) + ' ' + zero(h) + ':' + zero(m) + ':' + zero(s)
            break


        case 'Y.M.D':
            format_date = Y + '.' + M + '.' + D
            break
        case 'YYYY.MM.DD':
            format_date = Y + '.' + zero(M) + '.' + zero(D)
            break
        case 'Y.M.D h:m':
            format_date = Y + '.' + M + '.' + D + ' ' + h + ':' + m
            break
        case 'YYYY.MM.DD hh:mm':
            format_date = Y + '.' + zero(M) + '.' + zero(D) + ' ' + zero(h) + ':' + zero(m)
            break
        case 'Y.M.D h:m:s':
            format_date = Y + '.' + M + '.' + D + ' ' + h + ':' + m + ':' + s
            break
        case 'YYYY.MM.DD hh:mm:ss':
            format_date = Y + '.' + zero(M) + '.' + zero(D) + ' ' + zero(h) + ':' + zero(m) + ':' + zero(s)
            break

        case 'h:m:s':
            format_date = h + ':' + m + ':' + s
            break
        case 'hh:mm:ss':
            format_date = zero(h) + ':' + zero(m) + ':' + zero(s)
            break
        default:
            format_date = Y + '-' + zero(M) + '-' + zero(D) + ' ' + zero(h) + ':' + zero(m) + ':' + zero(s)
            break
    }
    return format_date
}

export default {
    formatDate
}

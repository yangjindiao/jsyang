// 更新父级options
export function upDateOptions(options) {
    const {
        q,
        scancode_time
    } = options
    if (q) {
        const q_ = decodeURIComponent(q)
        const q_arr = q_.split('?')
        if (q_arr.length > 1) {
            const parameter_str = q_arr[1]
            const parameter_arr = parameter_str.split('&')
            for (var i = 0; i < parameter_arr.length; i++) {
                const item_split = parameter_arr[i].split('=')
                let key = item_split[0]
                let value = item_split[1]
                options[key] = value
            }
        }
    }
}

export function getOptions(options) {
    return new Promise((resolve, reject) => {
        const obj = {}
        const {
            q,
            scancode_time
        } = options
        if (q) {
            const q_ = decodeURIComponent(q)
            const q_arr = q_.split('?')
            if (q_arr.length > 1) {
                const parameter_str = q_arr[1]
                const parameter_arr = parameter_str.split('&')
                for (var i = 0; i < parameter_arr.length; i++) {
                    const item_split = parameter_arr[i].split('=')
                    let key = item_split[0]
                    let value = item_split[1]
                    obj[key] = value
                }
            }
        }
        resolve(obj)
    })
}

export function getKeys(options) {
    return new Promise((resolve, reject) => {
        const obj = {}
        const {
            q,
            scancode_time
        } = options
        if (q) {
            const q_ = decodeURIComponent(q)
            const q_arr = q_.split('?')
            if (q_arr.length > 1) {
                const parameter_str = q_arr[1]
                const parameter_arr = parameter_str.split('&')
                for (var i = 0; i < parameter_arr.length; i++) {
                    const item_split = parameter_arr[i].split('=')
                    let key = item_split[0]
                    if (obj['key_list'] && obj['key_list'].length) {
                        obj['key_list'].push(key)
                    } else {
                        obj['key_list'] = [key]
                    }
                }
            }
        }
        resolve(obj)
    })
}

export function getValues(options) {
    return new Promise((resolve, reject) => {
        const obj = {}
        const {
            q,
            scancode_time
        } = options
        if (q) {
            const q_ = decodeURIComponent(q)
            const q_arr = q_.split('?')
            if (q_arr.length > 1) {
                const parameter_str = q_arr[1]
                const parameter_arr = parameter_str.split('&')
                for (var i = 0; i < parameter_arr.length; i++) {
                    const item_split = parameter_arr[i].split('=')
                    let value = item_split[1]
                    if (obj['value_list'] && obj['value_list'].length) {
                        obj['value_list'].push(value)
                    } else {
                        obj['value_list'] = [value]
                    }
                }
            }
        }
        resolve(obj)
    })
}

export function getCode(options = {}, code_type = "code", code_type_reg) {
    return new Promise((resolve, reject) => {
        const obj = {}
        const {
            q,
            scancode_time
        } = options
        if (q) {
            const q_ = decodeURIComponent(q)
            const q_arr = q_.split('?')
            if (q_arr.length > 1) {
                const parameter_str = q_arr[1]
                const parameter_arr = parameter_str.split('&')
                const key_list = []
                for (var i = 0; i < parameter_arr.length; i++) {
                    const item_split = parameter_arr[i].split('=')
                    let key = item_split[0]
                    let value = item_split[1]
                    obj[key] = value
                    key_list.push(key)
                }

                // 完全匹配
                const congruent_key_arr = key_list.filter(key => key === code_type)

                // 非完全匹配
                let not_congruent = []
                if (!congruent_key_arr.length) {
                    not_congruent = key_list.filter(key => key == code_type)
                }
                // 正则匹配
                const reg = code_type_reg || /^code\d$/g
                let reg_type = []
                if (!not_congruent.length && !congruent_key_arr.length) {
                    reg_type = key_list.filter(key => reg.test(key))
                }

                // key list
                const filter_key_list = congruent_key_arr.length ? congruent_key_arr : not_congruent.length ? not_congruent : reg_type
                if (filter_key_list.length) {
                    obj['code'] = obj[filter_key_list[0]]
                }
            }
        }
        resolve(obj.code || obj)
    })
}

export function help() {
    console.log("upDateOptions:options")
    console.log("getOptions:options")
    console.log("getKeys:options")
    console.log("getValues:options,code_type,code_type_reg")
}


const optionUtils = {
    upDateOptions: (options) => upDateOptions(options),
    getOptions: (options) => getOptions(options),
    getKeys: (options) => getKeys(options),
    getValues: (options) => getValues(options),
    getCode: (options) => getCode(options),
    help: () => help()
}

// 解析微信扫码进小程序的参数
export default optionUtils


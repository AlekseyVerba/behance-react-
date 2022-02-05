const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((PrevResult, f) => f(PrevResult), comp)
}

export default compose
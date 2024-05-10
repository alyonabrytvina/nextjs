type DelayedOptions = {
    shouldFail?: boolean;
    timeout?: number;
}

export function delayed<T>(
    data: T,
    options: DelayedOptions
) {
    const { shouldFail, timeout } = options;

    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            return shouldFail ? reject(data) : resolve(data);
        }, timeout);
    });
}

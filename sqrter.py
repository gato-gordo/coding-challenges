def sqrter(val):
    if val < 0:
        return None
    rt = 1
    close_enough = 0.0001
    while(abs(val - rt**2) > close_enough):
        rt = (rt+val/rt) / 2.0
    return rt

print sqrter(16)
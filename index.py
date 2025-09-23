n = int(input())
counting = 0
for r in range(0, n + 1, 1):
    for s in range(0, n + 1, 1):
        print(str(s * r) + " ", end='', flush=True)
        counting = counting + 1
    print("")
print("Cycle: " + str(counting))

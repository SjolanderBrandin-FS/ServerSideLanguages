import sys
name = input("What is your name?")
print(name)
f = open("myfile.txt","r")
## "a" appends end of file, "w" overwrites file.
##f.write("New line " + name)
##f.close()

print(f.read())
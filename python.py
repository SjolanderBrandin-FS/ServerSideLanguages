import sys

##f = open("myfile.txt","r")
## "a" appends end of file, "w" overwrites file.
##f.write("New line " + name)
##f.close()

##print(f.read())


name = input("Please enter the name of the student: ")
assignment = input("Please enter the name of the assignment: ")
grade = input("What percentage grade did they receive? ")
if grade < "60":
    letterGrade = "F"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing all of the required functionality.")
elif grade >= "60" and grade <= "69":
    letterGrade = "D"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing most of the required functionality.")
elif grade >= "70" and grade <= "79":
    letterGrade = "C"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing some of the required functionality.")
elif grade >= "80" and grade <= "89":
    letterGrade = "B"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing a little of the required functionality.")
else:
    letterGrade = "A"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing all of the required functionality.")

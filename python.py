import sys

##f = open("myfile.txt","r")
## "a" appends end of file, "w" overwrites file.
##f.write("New line " + name)
##f.close()

##print(f.read())


name = input("Please enter the name of the student: ")
assignment = input("Please enter the name of the assignment: ")
grade = input("What percentage grade did they receive? ")
numGrade = int(grade)
if numGrade < 60:
    letterGrade = "F"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing all of the required functionality.")
elif numGrade >= 60 and numGrade <= 69:
    letterGrade = "D"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing most of the required functionality.")
elif numGrade >= 70 and numGrade <= 79:
    letterGrade = "C"
    print(name)
    print(assignment)
    print(letterGrade)
    print("The assignment was missing some of the required functionality.")
elif numGrade >= 80 and numGrade <= 89:
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

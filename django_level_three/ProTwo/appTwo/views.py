# from django.shortcuts import render
# from django.shortcuts import HttpResponse
from django.shortcuts import render
from appTwo.models import NewUserForm
# Create your views here.

def index(request):
    return render(request,'appTwo/index.html')

def user(request):

    form = NewUserForm()
    
    if request.method == 'POST':
        form = NewUserForm(request.POST)


        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('ERROR FORM INVALID')

        return render(request,'appTwo/user.html',{'form':form})
    



from django.shortcuts import render
from appTwo.models import user
# Create your views here.

def index(request):
    return render(request,'appTwo/index.html')

def user(request):
    users_list = user.objects.order_by('first_name')
    users_dict ={'user':users_list}
    return render(request,'appTwo/users.html',users_dict)
    
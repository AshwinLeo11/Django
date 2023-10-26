from django.shortcuts import render

from  django.http import HttpResponse


#def index(request):
   # return HttpResponse("<em>My Second Project</em>")


def help(request):
    help_dict={'help_insert':'HELP PAGE'}
    return render(request, 'appTwo/help.html',context= help_dict)
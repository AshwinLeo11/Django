from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    my_dict ={'insert_me':"Can i saw u!"}
    return render(request, 'Ashwins_universe/index.html',context=my_dict)
    # return HttpResponse('Hello I am from')

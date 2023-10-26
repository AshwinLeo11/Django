from django.conf import path
from appTwo import views

urlpatterns =[
    path('',views.user,name='users'),
]
from django.urls import path
from Ashwins_Universe import views

urlpatterns = [
    path('', views.index,name='index'),
]
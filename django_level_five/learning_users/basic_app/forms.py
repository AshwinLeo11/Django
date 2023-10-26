from django import forms
from django.contrib.auth.models import User
from basic_app.models import UserProfileInfo


class UserForm(forms.ModelForm):
    passsword = forms.CharField(widget=forms.PasswordInput())


    class meta():
        model = User
        fields = ('username','email', 'password')


class UserProfileInfo(forms.ModelForm):

    
    class meta():
        model = UserProfileInfo
        fields = ('portfolio_site','profile_pic')


from django import forms
from appTwo.models import User


class NewUserForm(forms.ModelForm):
    class meta():
        model = User
        fields = '__all__'

from rest_framework import serializers

from articles.models import Notes, User, Usernotesmap
from django.contrib.auth import authenticate
from .models import Notes,User,Usernotesmap

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UsernotesmapSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usernotesmap
        fields = '__all__'


class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()

   
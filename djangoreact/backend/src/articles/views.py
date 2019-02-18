
# Create your views here.
from django.shortcuts import render
from rest_framework import generics

from rest_framework import viewsets
from articles.models import Notes, User, Usernotesmap
from .serializers import NotesSerializer, UserSerializer, UsernotesmapSerializer
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .serializers import LoginSerializer
from .models import Notes,Usernotesmap,User
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ListNotes(generics.ListCreateAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class DetailNotes(generics.RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all()
    serializer_class = NotesSerializer


class ListUser(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListUsernotesmap(generics.ListCreateAPIView):
    queryset = Usernotesmap.objects.all()
    serializer_class = UsernotesmapSerializer


class DetailUsernotesmap(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usernotesmap.objects.all()
    serializer_class = UsernotesmapSerializer



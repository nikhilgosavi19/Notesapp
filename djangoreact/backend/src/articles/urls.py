from django.urls import path

from . import views
from django.conf.urls import url
from rest_framework import routers
from .models import Notes, User, Usernotesmap





urlpatterns = [
    path('', views.ListNotes.as_view()),
    path('<int:pk>/', views.DetailNotes.as_view()),

    path('', views.ListUser.as_view()),
    path('<int:pk>/', views.DetailUser.as_view()),

    path('', views.ListUsernotesmap.as_view()),
    path('<int:pk>/', views.DetailUsernotesmap .as_view()),
]


from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('articles.urls')),
    #path('api/v1/auth/login/',LoginView.as_view()),
    #path('api/v1/auth/logout/',LogoutView.as_view()),
       #path('api/v1/auth/', include ('rest_framework.urls'))
]

# core/urls.py
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter

from .views import RecipeViewSet


router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path(r'^api/', include(router.urls)),
    path(r'^api-token-auth/', obtain_jwt_token),
]
